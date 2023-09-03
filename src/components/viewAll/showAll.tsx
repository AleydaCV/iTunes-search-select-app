import { ResType } from "../../interface/iTunes"
import CardHolder from "../body/CardHolder";

interface Params {
    data: ResType;
    isVideo: boolean;
}

const ShowAll = ({ data, isVideo }: Params) => {
  return (
    <CardHolder data={data} isVideo={isVideo}/>
    
  )
}

export default ShowAll