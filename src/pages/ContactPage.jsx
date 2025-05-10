import { useForm } from "react-hook-form";
import FormInput from "../components/form/Form";
import FormButton from "../components/FormButton/FormButton";
import FormTextarea from "../components/form/FormTextarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  fullName: z
    .string()
    .min(4, "Full name is required")
    .max(30, "Name is too long"),
  emailAddress: z.string().email("Invalid email address"),
  Subject: z.string().min(1, "Subject is required"),
  textArea: z.string().min(1, "Description is required"),
});

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const sendInfo = (data) => {
    console.log(data);
  };

  return (
    <div className="pt-20">
      <div className="max-w-6xl mx-auto p-3 m-10 bg-sky-950 flex flex-col lg:flex-row gap-10 rounded-lg text-white">
        {/* Image */}
        <div>
          <img
            src="https://i.pinimg.com/736x/4e/a1/ed/4ea1edf19d608508487740464ca01fac.jpg"
            alt="map image"
            className="w-96 h-96 object-cover shadow rounded"
          />
        </div>

        {/* Form */}
        <div className="flex-1 space-y-5">
          <form onSubmit={handleSubmit(sendInfo)}>
            <FormInput
              name="fullName"
              label="Fullname"
              placeholder="Enter you full name"
              {...register("fullName")}
              error={errors.fullName}
            />
            <FormInput
              name="emailAddress"
              label="Email address"
              placeholder="Enter your email address"
              {...register("emailAddress")}
              error={errors.emailAddress}
            />
            <FormInput
              name="Subject"
              label="Subject"
              placeholder="Subject"
              {...register("Subject")}
              error={errors.Subject}
            />

            <FormTextarea
              name="textArea"
              label="Text area"
              placeholder="Enter your description"
              {...register("textArea")}
              error={errors.textArea}
            />

            <FormButton text="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
