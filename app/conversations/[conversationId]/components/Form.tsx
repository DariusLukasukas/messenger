"use client";

import { HiPhoto } from "react-icons/hi2";
import MessageInput from "./MessageInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { CldUploadButton } from "next-cloudinary";
import useConversation from "@/hooks/useConversation";
import { FiSend } from "react-icons/fi";

const Form = () => {
  const { conversationId } = useConversation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue("message", "", { shouldValidate: true });
    axios.post("/api/messages", {
      ...data,
      conversationId: conversationId,
    });
  };

  const handleUpload = (result: any) => {
    axios.post("/api/messages", {
      image: result.info.secure_url,
      conversationId: conversationId,
    });
  };

  return (
    <div
      className="
        py-4
        px-4
        bg-background
        border-t
        border-neutral-600
        flex
        items-center
        gap-2
        lg:gap-4
        w-full
      "
    >
      <CldUploadButton
        options={{ maxFiles: 1, sources: ["local"] }}
        onUpload={handleUpload}
        uploadPreset="ckzbihbl"
      >
        <HiPhoto size={30} className="text-neutral-800 dark:text-neutral-200" />
      </CldUploadButton>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-2 lg:gap-4 w-full"
      >
        <MessageInput
          id="message"
          register={register}
          errors={errors}
          required
          placeholder="Write a message"
        />
        <button
          type="submit"
          className="
            rounded-lg
            bg-black hover:bg-opacity-70
            dark:bg-neutral-200
            p-2
            cursor-pointer
            transition
          "
        >
          <FiSend size={18} className="text-white dark:text-black" />
        </button>
      </form>
    </div>
  );
};

export default Form;
