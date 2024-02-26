import { useState } from "react";

import { Button, Dialog, DialogPanel, TextInput } from "@tremor/react";
import { RiCloseFill } from "@remixicon/react";

export default function SubscriptionAdd() {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);
  return (
    <>
      <Button
        className="w-full sm:w-fit sm:ml-auto block mt-3"
        onClick={openDialog}
      >
        Add Subscription
      </Button>

      <Dialog open={isOpen} static={true} onClose={(val) => setIsOpen(val)}>
        <DialogPanel>
          <div className="flex justify-between items-center">
            <h1>Add Subscription</h1>{" "}
            <button onClick={closeDialog}>
              <RiCloseFill
                size={40}
                className="text-slate-400 hover:bg-slate-100 p-1 rounded"
              />
            </button>
          </div>
          <form>
            <Button type="submit">Add</Button>
          </form>
        </DialogPanel>
      </Dialog>
    </>
  );
}
