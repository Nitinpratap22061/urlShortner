const shortid = require("shortid");
const URL = require('../models/url')

async function handleGenerateNewShortUrl(req,res)
{
    const  body = req.body;
    if(!body.url)
    {
        return res.status(400).json({error:'url is required'});
    }
  const shortID = shortid() ; 
  await URL.create({
    shortId : shortID,
    originalUrl:body.url,
    totalClick : []

  })
  return res.json({id:shortID})

}

async function handleGetShortUrl(req,res) {
  const shortId = req.params.shortId;
   const entry = await URL.findOneAndUpdate(
    { shortId },
    { $push: { totalClick: { timestamp: Date.now() } } })
  console.log(entry);
  res.redirect(entry.originalUrl);
}
 
async function handleGetAnalytics(req,res) {
  const shortId = req.params.shortId;
  const result =await URL.findOne({shortId})
  return res.json({totalClick:result.totalClick.length , analytics:result.totalClick,})
  
}
module.exports ={
    handleGenerateNewShortUrl,
    handleGetShortUrl,
    handleGetAnalytics,
}