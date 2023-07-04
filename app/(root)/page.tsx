"use client";
import Modal from "@/components/ui/modal";

const SetupPage = () => {
  return (
    <div className="p-4">
      <Modal
        isOpen={true}
        onClose={() => {}}
        title="Title"
        description="description"
      >
        Children
      </Modal>
    </div>
  );
};

export default SetupPage;
