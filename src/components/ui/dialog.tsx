import { forwardRef } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

export function Dialog(props: DialogPrimitive.DialogProps) {
  return <DialogPrimitive.Dialog {...props} />
}

export const DialogTrigger = forwardRef<
  HTMLButtonElement,
  DialogPrimitive.DialogTriggerProps
>((props, ref) => {
  return <DialogPrimitive.DialogTrigger {...props} ref={ref} />
})
DialogTrigger.displayName = 'DialogTrigger'

export const DialogClose = forwardRef<
  HTMLButtonElement,
  DialogPrimitive.DialogCloseProps
>((props, ref) => {
  return <DialogPrimitive.DialogClose {...props} ref={ref} />
})
DialogClose.displayName = 'DialogClose'

export function DialogPortal(props: DialogPrimitive.DialogPortalProps) {
  return <DialogPrimitive.DialogPortal {...props} />
}

export const DialogOverlay = forwardRef<
  HTMLDivElement,
  DialogPrimitive.DialogOverlayProps
>((props, ref) => {
  return (
    <DialogPrimitive.DialogOverlay
      {...props}
      ref={ref}
      className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
    />
  )
})
DialogOverlay.displayName = 'DialogOverlay'

export const DialogContent = forwardRef<
  HTMLDivElement,
  DialogPrimitive.DialogContentProps
>((props, ref) => {
  return (
    <DialogPortal>
      <DialogOverlay />

      <DialogPrimitive.DialogContent
        {...props}
        ref={ref}
        className="fixed z-50 right-0 top-0 bottom-0 w-[400px] h-screen border-l border-zinc-900 bg-zinc-950 p-8"
      />
    </DialogPortal>
  )
})
DialogContent.displayName = 'DialogContent'

export const DialogTitle = forwardRef<
  HTMLHeadingElement,
  DialogPrimitive.DialogTitleProps
>((props, ref) => {
  return (
    <DialogPrimitive.DialogTitle
      {...props}
      ref={ref}
      className="text-lg font-semibold"
    />
  )
})
DialogTitle.displayName = 'DialogTitle'

export const DialogDescription = forwardRef<
  HTMLDivElement,
  DialogPrimitive.DialogDescriptionProps
>((props, ref) => {
  return (
    <DialogPrimitive.DialogDescription
      {...props}
      ref={ref}
      className="text-zinc-400 text-sm leading-relaxed"
    />
  )
})
DialogDescription.displayName = 'DialogDescription'
