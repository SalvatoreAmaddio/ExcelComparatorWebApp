import { UseDialogMessage } from "./useDialogsMessage";
import { useNavigate } from "react-router-dom";

export function useUpload({ file1, file2 } = {}) {

    const navigate = useNavigate();
    const {displayError, displayLoading, closeDialog} = UseDialogMessage();

    async function uploadClick()
    {
        if (!file1 || !file2)
        {
            displayError();
            return;
        }

        const formData = new FormData();
        formData.append("file1", file1);
        formData.append("file2", file2);

        try
        {
            displayLoading();
            const res = await fetch("http://localhost:5000/api/upload/excel",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data = await res.json();

            if (res.ok)
            {
                closeDialog();
                navigate("/Comparison", { state: data });
            }

            else
            {
                displayError("Upload failed", data.message);
            }
        }
        catch (err)
        {
            displayError("Error: " + err.name, err.message);
        }
    }

    return {
        uploadClick
    };
}