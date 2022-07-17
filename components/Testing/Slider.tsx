import * as React from "react";
import SliderUnstyled, {
  SliderUnstyledThumbSlotProps,
  SliderUnstyledProps,
} from "@mui/base/SliderUnstyled";

const Thumb = React.forwardRef(function Thumb(
  props: SliderUnstyledThumbSlotProps,
  ref: React.ForwardedRef<HTMLSpanElement>
) {
  const { ownerState, className, children, ...other } = props;
  return (
    <span
      className={`${className} absolute -mt-1 -ml-2 flex h-4 w-4 items-center justify-center rounded-full bg-white shadow ring-2 ring-cyan-500 dark:ring-cyan-400`}
      {...other}
      ref={ref}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 ring-1 ring-inset ring-slate-900/5 dark:bg-cyan-400"></span>
      {children}
    </span>
  );
});

const Slider = React.forwardRef(function Slider(
  props: SliderUnstyledProps,
  ref: React.ForwardedRef<HTMLSpanElement>
) {
  return (
    <SliderUnstyled
      {...props}
      ref={ref}
      components={{
        Thumb,
      }}
      componentsProps={{
        root: { className: "w-full relative inline-block h-2 cursor-pointer" },
        rail: {
          className:
            "bg-slate-100 dark:bg-slate-700 h-2 w-full rounded-full block absolute",
        },
        track: {
          className: "bg-cyan-500 dark:bg-cyan-400 h-2 absolute rounded-full",
        },
      }}
    />
  );
});

export default Slider;
