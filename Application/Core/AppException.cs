namespace Application.Core
{
    public class AppException
    {
        public AppException(int statusCode, string messsage, string details = null)
        {
            StatusCode = statusCode;
            Message = messsage;
            Details = details;
        }
        public int StatusCode { get; set; }
        public string Message { get; set; }
        public string Details { get; set; }
    }
}