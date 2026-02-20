import Swal from "sweetalert2"
export const showToast = (message: string, isSuccess: boolean) => {
    Swal.fire({
        text: message,
        icon: isSuccess ? 'success' : 'error', // Success = Green, Error = Red
        toast: true,                           // Makes it a small "Toast" instead of a big modal
        position: 'top-end',                   // Corner of the screen
        showConfirmButton: false,              // No "OK" button needed
        timer: 3000,                           // Disappears in 3 seconds
        timerProgressBar: true,                // Shows a little loading bar at the bottom
        background: '#fff',
        iconColor: isSuccess ? '#28a745' : '#dc3545', // Forces green/red specifically
    })
};