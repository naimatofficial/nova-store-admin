"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/Model";

export const StoreModal = () => {
	const storeModal = useStoreModal();

	return (
		<Modal
			title="Create Store"
			description="Add new store to manage products and categories"
			isOpen={storeModal.isOpen}
			onClose={() => storeModal.onClose}
		>
			Future create store form
		</Modal>
	);
};
