import Swal from "sweetalert2";

export function useDialogMessage()
{
  function displayError(title = "Missing File", msg = "Please ensure you've uploaded two excel files")
    {
        Swal.fire({
            title: title,
            html: msg,
            icon: "error",
            confirmButtonText: "OK",
        });
    }

    function displayLoading()
    {
        Swal.fire({
            title: "Uploading...",
            html: "Please wait",
            allowOutsideClick: false,
            didOpen: () => Swal.showLoading(),
        });
    }

    function closeDialog()
    {
        Swal.close();
    }

    return{
        displayError,
        displayLoading,
        closeDialog
    }
}