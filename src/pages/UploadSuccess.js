import "./UploadSuccess.css";
const UploadSuccess = () => {
  return (
    <div className="upload-success">
      <b className="documents-are-uploaded">Documents are uploaded</b>
      <div className="you-will-receive-container">
        <p className="you-will-receive">
          You will receive an email from us once you are
        </p>
        <p className="you-will-receive">completely verified</p>
      </div>
      <img
        className="icon-awesome-check-circle"
        alt=""
        src="/icon-awesomecheckcircle.svg"
      />
    </div>
  );
};

export default UploadSuccess;
