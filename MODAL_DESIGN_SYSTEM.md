# Modal Design System

## Automated Modal Components

**DO NOT manually create modal markup.** Use the pre-built components in `/src/components/ui/Modal.tsx` that automatically enforce the correct design.

## Available Components

### 1. ConfirmationModal

For delete confirmations, warnings, and simple yes/no dialogs.

```tsx
import { ConfirmationModal } from "@/components/ui/Modal";

<ConfirmationModal
    isOpen={showModal}
    onClose={() => setShowModal(false)}
    onConfirm={handleDelete}
    title="Delete Invoice?"
    description={`Are you sure you want to delete ${invoiceNumber}? This action cannot be undone.`}
    entityName={invoiceNumber} // Will be bolded in description
    confirmText="Yes, Delete"
    cancelText="Cancel"
    variant="danger" // "danger" | "warning" | "info"
    isLoading={isDeleting}
/>
```

**Automatically includes:**
- ✅ Correct backdrop (`bg-white/40 backdrop-blur-xl`)
- ✅ Portal rendering
- ✅ Proper animations
- ✅ Loading states
- ✅ Color variants

### 2. FormModal

For forms with header, icon, and gray body background.

```tsx
import { FormModal } from "@/components/ui/Modal";
import { PiBuilding } from "react-icons/pi";

<FormModal
    isOpen={isOpen}
    onClose={onClose}
    title="Add Vendor"
    subtitle="Create a new supplier profile"
    icon={<PiBuilding className="text-2xl" />}
    maxWidth="xl" // "sm" | "md" | "lg" | "xl" | "2xl"
>
    <div className="p-8 space-y-6">
        {/* Your form content */}
    </div>
</FormModal>
```

**Automatically includes:**
- ✅ Standard header with icon
- ✅ Gray body background
- ✅ Close button
- ✅ Proper scrolling
- ✅ Max height handling

### 3. BaseModal

For custom modals that don't fit the above patterns.

```tsx
import { BaseModal } from "@/components/ui/Modal";

<BaseModal
    isOpen={isOpen}
    onClose={onClose}
    maxWidth="lg"
    showCloseButton={true}
>
    {/* Your custom content */}
</BaseModal>
```

## Migration Guide

### Before (Manual - ❌ DON'T DO THIS)

```tsx
const modalContent = (
    <AnimatePresence>
        {showConfirm && (
            <div className="fixed inset-0 z-[9999]...">
                <motion.div className="bg-black/50..."> {/* WRONG! */}
                    {/* 50+ lines of boilerplate */}
                </motion.div>
            </div>
        )}
    </AnimatePresence>
);
return createPortal(modalContent, document.body);
```

### After (Automated - ✅ DO THIS)

```tsx
<ConfirmationModal
    isOpen={showConfirm}
    onClose={() => setShowConfirm(false)}
    onConfirm={handleDelete}
    title="Delete Item?"
    description="Are you sure?"
    variant="danger"
/>
```

## Examples

See these files for usage:
- `/src/app/dashboard/invoices/[id]/InvoiceActions.tsx` - Delete confirmation
- `/src/components/dashboard/CreateVendorModal.tsx` - Can be refactored to use FormModal
- `/src/components/dashboard/QuickInvoiceModal.tsx` - Can be refactored to use FormModal

## Rules

1. ✅ **ALWAYS** use `ConfirmationModal` for confirmations
2. ✅ **ALWAYS** use `FormModal` for forms
3. ✅ **ONLY** use `BaseModal` for truly custom cases
4. ❌ **NEVER** manually create modal backdrop/portal code
5. ❌ **NEVER** use `bg-black/50` or `backdrop-blur-sm`

## Benefits

- 🎨 Consistent design automatically
- 🔧 Less code to write
- 🐛 Fewer bugs
- 📱 Responsive by default
- ♿ Accessibility built-in
- 🚀 Faster development
