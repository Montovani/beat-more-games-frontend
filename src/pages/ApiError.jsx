import SubtitleH2 from "../components/SubtitleH2"

function ApiError() {
  return (
    <>
    <SubtitleH2 text={"Sorry there is an error in the Server"} color={"#be2323"}/>
    <div>
      <img src="https://i.makeagif.com/media/8-07-2016/e6mNld.gif" alt="" />
    </div>
    <h3>Please come back in a few minutes.</h3>
    </>
  )
}

export default ApiError
