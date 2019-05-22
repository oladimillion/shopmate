import toastr from "toastr";

/**
 * toastr customisation
 *
 * @name options
 * @object
 */
toastr.options = {
  closeButton: true,
  newestOnTop: true,
  progressBar: true,
  positionClass: 'toast-top-right',
  preventDuplicates: true,
  showDuration: '300',
  hideDuration: '1000',
  timeOut: '7000',
  extendedTimeOut: '2000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
};

export default toastr;
