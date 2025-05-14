import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FilePreviewProps {
  file: File | null;
  onRemove: () => void;
  onChange: (file: File | null) => void;
}

export const FilePreview: React.FC<FilePreviewProps> = ({ file, onRemove, onChange }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [showInput, setShowInput] = useState(!file);

  useEffect(() => {
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setShowInput(false);
      return () => URL.revokeObjectURL(url);
    }
    setPreviewUrl(null);
    setShowInput(!file);
    return undefined;
  }, [file]);

  const handleRemove = () => {
    onRemove();
    setShowInput(true);
    onChange(null);
  };

  return (
    <div className="mt-2">
      {showInput && (
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const newFile = e.target.files ? e.target.files[0] : null;
            onChange(newFile);
            if (newFile) setShowInput(false);
          }}
          className="block w-full text-sm text-gray-200 file:mr-4 file:px-4 file:py-2 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-900 file:text-purple-300 hover:file:bg-purple-800 hover:file:shadow-[0_0_5px_#7c3aed] transition-all duration-500"
          aria-label="Upload file"
        />
      )}
      {file && (
        <div className="flex items-center space-x-4 mt-2">
          {previewUrl ? (
            <motion.img
              src={previewUrl}
              alt="File preview"
              className="w-24 h-24 object-cover rounded-lg border border-purple-600 shadow-[0_0_8px_#7c3aed] hover:scale-105 transition-transform duration-500"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          ) : (
            <span className="text-sm text-gray-200 truncate max-w-xs">
              {file.name}
            </span>
          )}
          <button
            type="button"
            onClick={handleRemove}
            className="text-purple-300 hover:text-purple-400 transition-colors duration-500"
            aria-label="Remove file"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};