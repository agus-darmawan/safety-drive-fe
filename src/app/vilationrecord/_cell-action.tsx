import { Eye, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import axios from "@/lib/axios";

import { AlertModal } from "@/components/AlertModal";
import CloudinaryImage from "@/components/CloudinaryImage";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { useToast } from "@/components/ui/use-toast";

interface CellActionProps {
  data: any;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const [loading] = useState(false);
  const [openDel, setOpenDel] = useState(false);

  const onConfirm = async () => {
    try {
      await axios.delete(`/vehicles/${data.id}`);
      toast({
        title: "Success",
        description: "Data berhasil dihapus",
      });
      setTimeout(() => window.location.reload(), 2000);
    } catch (error) {
      if (error) {
        toast({
          title: "Failed",
          description: "Data tidak berhasil dihapus",
        });
      }
    } finally {
      setOpenDel(false);
    }
  };

  return (
    <div className="w-36">
      <Button
        variant="secondary"
        className="mr-3 px-2 pl-2"
        onClick={() => setOpen(true)}
      >
        <Eye className="h-4 w-4" />
      </Button>
      <AlertModal
        isOpen={openDel}
        onClose={() => setOpenDel(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        className="m-0 max-w-96 p-0"
      >
        <CloudinaryImage
          className="w-full h-full"
          fullUrl={String(data.filePath)}
          height={200}
          width={380}
          alt={data.name}
        />
      </Modal>
      <Button
        variant="destructive"
        className="px-2 py-2"
        onClick={() => setOpenDel(true)}
      >
        <Trash className="h-4 w-4" />
      </Button>
    </div>
  );
};
