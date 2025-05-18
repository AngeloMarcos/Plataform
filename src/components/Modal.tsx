import * as Dialog from '@radix-ui/react-dialog';

export default function ModalExample() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Open Modal</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg">
          <Dialog.Title className="text-lg font-bold mb-4">Modal Title</Dialog.Title>
          <Dialog.Description className="mb-4">Modal content goes here.</Dialog.Description>
          <Dialog.Close asChild>
            <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">Close</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
);
}
