import React, { useState } from "react";

export default function RealEstateApp() {
  const [properties, setProperties] = useState([]);
  const [form, setForm] = useState({
    title: "",
    type: "Flat",
    price: "",
    address: "",
    lat: "",
    lng: "",
    phone: "",
    images: "",
    video: "",
  });

  const addProperty = () => {
    if (!form.title || !form.address || !form.phone) {
      alert("Please fill required fields");
      return;
    }
    setProperties([...properties, form]);
    setForm({ title: "", type: "Flat", price: "", address: "", lat: "", lng: "", phone: "", images: "", video: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Property Listing Website</h1>

      {/* Add Property */}
      <div className="bg-white p-6 rounded-2xl shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Add Your Property</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input placeholder="Property Title" value={form.title} onChange={e=>setForm({...form,title:e.target.value})} className="p-2 border rounded" />
          <select value={form.type} onChange={e=>setForm({...form,type:e.target.value})} className="p-2 border rounded">
            <option>Flat</option>
            <option>Plot</option>
            <option>Rental</option>
          </select>
          <input placeholder="Price" value={form.price} onChange={e=>setForm({...form,price:e.target.value})} className="p-2 border rounded" />
          <input placeholder="Phone Number" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="p-2 border rounded" />
          <input placeholder="Full Address" value={form.address} onChange={e=>setForm({...form,address:e.target.value})} className="p-2 border rounded col-span-2" />
          <input placeholder="Latitude" value={form.lat} onChange={e=>setForm({...form,lat:e.target.value})} className="p-2 border rounded" />
          <input placeholder="Longitude" value={form.lng} onChange={e=>setForm({...form,lng:e.target.value})} className="p-2 border rounded" />
          <input placeholder="Image URLs (comma separated)" value={form.images} onChange={e=>setForm({...form,images:e.target.value})} className="p-2 border rounded col-span-2" />
          <input placeholder="YouTube Video Link" value={form.video} onChange={e=>setForm({...form,video:e.target.value})} className="p-2 border rounded col-span-2" />
        </div>
        <button onClick={addProperty} className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-xl">Submit Property</button>
      </div>

      {/* Property List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((p,i)=>(
          <div key={i} className="bg-white p-4 rounded-2xl shadow">
            <h3 className="text-lg font-bold">{p.title}</h3>
            <p className="text-sm">{p.type} • ₹{p.price}</p>
            <p className="text-sm mt-1">{p.address}</p>

            {p.images && (
              <img src={p.images.split(",")[0]} alt="property" className="w-full h-40 object-cover rounded mt-2" />
            )}

            {p.lat && p.lng && (
              <iframe
                className="w-full h-40 mt-2 rounded"
                loading="lazy"
                src={`https://www.google.com/maps?q=${p.lat},${p.lng}&z=15&output=embed`}
              />
            )}

            {p.video && (
              <iframe className="w-full h-40 mt-2 rounded" src={p.video.replace("watch?v=","embed/")} />
            )}

            <a href={`tel:${p.phone}`} className="block text-center mt-3 bg-green-600 text-white py-2 rounded-xl">Contact Owner</a>
          </div>
        ))}
      </div>
    </div>
  );
}
