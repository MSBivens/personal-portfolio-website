import { NextApiRequest, NextApiResponse } from "next";
import { buidling } from "../../data";

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log("API", buidling);

  res.status(200).json({ buidling });
};
