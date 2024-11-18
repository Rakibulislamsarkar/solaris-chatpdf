'use client'

import React, { useState, useRef } from "react";
import { Button } from './ui/button';
import { Drawer, DrawerDescription, DrawerTitle, DrawerHeader, DrawerContent, DrawerFooter, DrawerClose } from './ui/drawer';
import { Label } from './ui/label';
import { Upload } from 'lucide-react';
import { toast } from "sonner";
import { uploadToS3 } from "@/lib/s3";

interface FileuploadProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onUpload: (file: File | null) => void;
}

const Fileupload: React.FC<FileuploadProps> = ({ isOpen, onOpenChange, onUpload }) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFileName(file ? file.name : null);
  };

  const handleUpload = async () => {
    const file = fileInputRef.current?.files?.[0] || null;
    if (file) {
        if (file.size > 10 * 1024 * 1024) {
          // File is larger than 10MB
          toast.error("File too large.");
          return;
        }

        try {
            const data = await uploadToS3(file)
            console.log('data',data)
        } catch (error) {
            console.log(error)
        }
  
        if (onUpload) {
          onUpload(file)
        } else {
          // Default upload logic if no onUpload prop is provided
          console.log("Uploading file:", file.name)
          toast.success("File uploaded successfully!")
        }
      } else {
        toast.error("No file selected.")
        return
      }
    onOpenChange(false);
    setFileName(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <Drawer open={isOpen} onOpenChange={onOpenChange}>
      <DrawerContent className="max-w-md mx-auto p-4 rounded-lg shadow-lg">
        <DrawerHeader>
          <DrawerTitle className="text-2xl md:text-3xl tracking-tighter font-semibold text-center">Upload PDF</DrawerTitle>
          <DrawerDescription className="mt-5">
            <div className="p-4 pb-0">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="file-upload">Select Files to Upload</Label>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full justify-start text-left font-normal"
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    {fileName || 'Select PDF or document'}
                  </Button>
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                  />
                  {fileName && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setFileName(null);
                        if (fileInputRef.current) {
                          fileInputRef.current.value = '';
                        }
                      }}
                    >
                      Clear
                    </Button>
                  )}
                </div>
                {fileName && <p className="text-sm text-muted-foreground mt-1">Selected file: {fileName}</p>}
              </div>
            </div>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button onClick={handleUpload} disabled={!fileName}>Upload</Button>
          <DrawerClose asChild>
            <Button variant="destructive">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Fileupload;