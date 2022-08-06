import Modal from "@mui/material/Modal";
import Image from "next/image";
import { NextPage } from "next/types";

import iWantToIcon1 from "../../../public/i-want-icons/iWantToIcon1.png";
import iWantToIcon2 from "../../../public/i-want-icons/iWantToIcon2.png";
import iWantToIcon3 from "../../../public/i-want-icons/iWantToIcon3.png";
import iWantToIcon4 from "../../../public/i-want-icons/iWantToIcon4.png";
import iWantToIcon5 from "../../../public/i-want-icons/iWantToIcon5.png";

interface Props {
  open: boolean;
  handleClose: () => void;
}

const IWantModal: NextPage<Props> = ({ open, handleClose }) => {
  return (
    <div className="flex items-center justify-center">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          id="iWantDropdown"
          className="absolute top-36 z-50 w-full items-center rounded bg-white outline-none md:left-1/4 md:right-1/4  md:w-1/2"
        >
          <div className="justify-left flex h-14  items-center space-x-8 rounded p-1 pt-2 hover:bg-slate-100 hover:text-iwanttoColor">
            <div className="flex items-center justify-center pl-3">
              <Image src={iWantToIcon1} width="30" height="30" alt="icon1" />
            </div>
            <div>
              <p>Register a Card</p>
            </div>
          </div>

          <div className="justify-left flex h-14 items-center space-x-8 p-1 hover:bg-slate-100 hover:text-iwanttoColor">
            <div className="flex items-center justify-center pl-3">
              <Image src={iWantToIcon2} width="30" height="30" alt="icon1" />
            </div>
            <div>
              <p>Mortgage Loan</p>
            </div>
          </div>

          <div className="justify-left flex h-14 items-center space-x-8 p-1 hover:bg-slate-100 hover:text-iwanttoColor">
            <div className="flex items-center justify-center pl-3">
              <Image src={iWantToIcon3} width="30" height="30" alt="icon1" />
            </div>
            <div>
              <p>Unsecured Loan</p>
            </div>
          </div>

          <div className="justify-left flex h-14 items-center space-x-8 p-1 hover:bg-slate-100 hover:text-iwanttoColor">
            <div className="flex items-center justify-center pl-3">
              <Image src={iWantToIcon4} width="30" height="30" alt="icon1" />
            </div>
            <div>
              <p>Register an Account and EBank</p>
            </div>
          </div>

          <div className="justify-left flex h-14 items-center space-x-8 rounded p-1 hover:bg-slate-100 hover:text-iwanttoColor">
            <div className="flex items-center justify-center pl-3">
              <Image src={iWantToIcon5} width="30" height="30" alt="icon1" />
            </div>
            <div>
              <p>Support</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default IWantModal;
