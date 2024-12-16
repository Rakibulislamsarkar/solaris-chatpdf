import { Pinecone } from '@pinecone-database/pinecone';
import { downloadFromS3 } from './s3-server';
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";


export const getPineconeClient = () => {
    return new Pinecone({
      apiKey: process.env.PINECONE_API_KEY!,
    });
  };

  export async function loadS3IntoPinecone(fileKey:string) {
    // 1. Obtain the PDF -> download and read from PDF
    console.log("Downloading S3 into file system")
    const file_name = await downloadFromS3(fileKey)
    if(!file_name){
        throw new Error("Couldn,t download from S3")
    }
    const loader = new PDFLoader(file_name)
    const pages = await loader.load()
    return pages
  }