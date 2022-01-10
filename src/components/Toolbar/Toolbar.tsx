import type { CommonProps, GenericIcon, Theme } from "../../types";
import { i18n } from "i18next";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

import React, {
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { Icon } from "../../icons";
import { EmptyToolbarHook, useToolbar, type ToolbarHook } from "./hooks";
import { Content } from "./Content";

import collapsePNG from "./components/assets/collapsed.png";
import expandPNG from "./components/assets/expanded.png";

import clsx from "clsx";
import { Mask } from "./components/Mask";

export type ToolbarProps = CommonProps & {
  icons?: GenericIcon<
    | "clicker"
    | "selector"
    | "pencil"
    | "eraser"
    | "clean"
    | "expand"
    | "collapse"
    | "up"
    | "down"
    | "text"
    | "apps"
  >;
};

type ToolbarContextType = ToolbarHook & {
  theme: Theme;
  icons?: ToolbarProps["icons"];
  i18n?: i18n | null;
};

export const ToolbarContext = createContext<ToolbarContextType>({
  theme: "light",
  ...EmptyToolbarHook,
});

export const name = "fastboard-toolbar";

export const Toolbar = ({
  theme = "light",
  icons,
  room,
  i18n,
}: ToolbarProps) => {
  const [expanded, setExpanded] = useState(true);
  const [display, setDisplay] = useState(true);
  const hook = useToolbar(room);
  const toggle = useCallback(() => {
    setExpanded(e => {
      if (!e) {
        setDisplay(true);
      } else {
        setDisplay(false);
      }
      return !e;
    });
  }, []);
  const toolbarRef = useRef<HTMLDivElement>(null);
  const [onHover, setOnHover] = useState<boolean>(false);
  const disabled = !hook.writable;

  return (
    <ToolbarContext.Provider value={{ theme, icons, ...hook, i18n }}>
      <AnimatePresence>
        {display ? (
          <motion.div
            initial={{ x: -100 }}
            animate={{
              x: 0,
              transition: {
                duration: 1,
              },
            }}
            key="toolbar"
            ref={toolbarRef}
            className={clsx(name, theme)}
            onPointerEnter={() => {
              if (expanded) {
                setOnHover(true);
              }
            }}
            onMouseLeave={() => setOnHover(false)}
            exit={{
              x: -100,
              transition: { duration: 1 },
            }}
          >
            <Content />
            {expanded && onHover && (
              <Mask toolbarRef={toolbarRef}>
                <div onClick={() => toggle()}>
                  <img
                    className={clsx(`${name}-mask-btn`, theme)}
                    src={collapsePNG}
                  />
                </div>
              </Mask>
            )}
          </motion.div>
        ) : (
          <motion.div
            className={clsx(`${name}-expand-btn`, theme)}
            key="expand"
            onClick={() => toggle()}
            initial={{ x: -100 }}
            animate={{
              x: 0,
              transition: { duration: 1 },
            }}
          >
            {!expanded && (
              <Icon
                fallback={
                  <img
                    src={expandPNG}
                    className={clsx(`${name}-mask-btn`, theme)}
                  />
                }
                src={disabled ? icons?.expandIconDisable : icons?.expandIcon}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ToolbarContext.Provider>
  );
};
