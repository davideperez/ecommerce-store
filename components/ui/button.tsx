import { cn } from "@/lib/utils";
import { forwardRef } from "react";

//?? learn 
export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}


//?? learn forwarRef
const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return (
        <button
            className={cn(
                `
                w-auto
                rounded-full
                bg-black
                border-transparent
                px-5
                py-3
                disabled:cursor-not-allowed
                disabled:opacity-50
                text-white
                font-semibold
                hover:opacity-75
                transition
                `,
                //the following allows to override 
                //this classes when implementing the component:
                className
            )}
            disabled={disabled}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    )
})

//??learn practically all of the terms of this code.
Button.displayName = "Button";

export default Button;