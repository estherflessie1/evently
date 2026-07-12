import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  Clock,
  ImagePlus,
  MapPin,
  Tag,
  Type,
} from "lucide-react";

import { useEvent } from "../context/EventContext";
import { useAuth } from "../context/AuthContext";

function CreateEventForm() {
  const { addEvent } = useEvent();
  const { user } = useAuth();

  const navigate = useNavigate();

  const [preview, setPreview] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    location: "",
    date: "",
    time: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setPreview(reader.result);

      setFormData((prev) => ({
        ...prev,
        image: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addEvent({
      id: Date.now(),

      ...formData,

      createdBy: user?.fullName || user?.name || "Anonymous",

      createdAt: new Date().toISOString(),
    });

    navigate("/");

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-xl"
    >

      <Input
        icon={<Type size={18} />}
        name="title"
        placeholder="Event Title"
        value={formData.title}
        onChange={handleChange}
      />

      <div className="mt-5">

        <label className="mb-2 block font-medium">
          Category
        </label>

        <div className="flex items-center gap-3 rounded-xl border px-4 py-3">

          <Tag size={18} />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full outline-none"
          >
            <option value="">Choose Category</option>
            <option>Music</option>
            <option>Sports</option>
            <option>Tech</option>
            <option>Education</option>
            <option>Art</option>
            <option>Business</option>
          </select>

        </div>

      </div>

      <Input
        icon={<MapPin size={18} />}
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
      />

      <div className="mt-5 grid gap-5 md:grid-cols-2">

        <Input
          icon={<Calendar size={18} />}
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />

        <Input
          icon={<Clock size={18} />}
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />

      </div>

      <div className="mt-5">

        <label className="mb-2 block font-medium">
          Event Description
        </label>

        <textarea
          rows="5"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Tell people about your event..."
          className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
        />

      </div>

      <div className="mt-5">

        <label className="mb-2 block font-medium">
          Upload Event Image
        </label>

        <label className="flex cursor-pointer items-center justify-center gap-3 rounded-xl border-2 border-dashed border-blue-300 bg-blue-50 p-8">

          <ImagePlus />

          Choose Image

          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImage}
          />

        </label>

      </div>

      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="mt-6 h-64 w-full rounded-xl object-cover"
        />
      )}

      <button
        type="submit"
        className="mt-8 w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
      >
        Create Event
      </button>

    </form>
  );
}

function Input({
  icon,
  type = "text",
  ...props
}) {
  return (
    <div className="mt-5">

      <div className="flex items-center gap-3 rounded-xl border px-4 py-3">

        {icon}

        <input
          type={type}
          {...props}
          className="w-full outline-none"
        />

      </div>

    </div>
  );
}

export default CreateEventForm;