import { useState } from "react"

export const useModal = () => {
      
      const [modal, setModal] = useState(false);

      const onShowModal = () => setModal( !modal );

      return {
            modal,
            onShowModal
      }
}
