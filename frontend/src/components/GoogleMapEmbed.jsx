import React from "react";

const GoogleMapEmbed = () => {
  return (
    <div className="w-full h-[400px] flex flex-col md:flex-row  gap-2">
      <iframe
        title="NAM Power Tools"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d340.9746379324759!2d121.02704591511282!3d14.786614860685289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397afc123a8d815%3A0xcb7ec30c48761a4d!2sNAM%20PowerTools!5e0!3m2!1sen!2sph!4v1747896823931!5m2!1sen!2sph"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>


            <iframe
        title="Mhite Power Tools"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.5079215619457!2d120.9938898928187!3d14.62708511882798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b60c8715f53f%3A0x81d00310172452c8!2s147%20Iriga%2C%20La%20Loma%2C%20Quezon%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1747898703512!5m2!1sen!2sph" 
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

    </div>

    
  );
};

export default GoogleMapEmbed;

