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

    function displayInfoMessage(title = "Message", msg)
    {
        Swal.fire({
            title: title,
            html: msg,
            icon: "info",
            confirmButtonText: "OK",
        });
    }

    function displayLoading()
    {
        Swal.fire({
            title: "Uploading...",
            html: "<p>Please wait</p><p>I'm on a free tier, that's why I'm a bit slow :)</p>",
            allowOutsideClick: false,
            didOpen: () => Swal.showLoading(),
        });
    }

    function closeDialog()
    {
        Swal.close();
    }

    return{
        displayInfoMessage,
        displayError,
        displayLoading,
        closeDialog
    }
}