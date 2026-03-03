export interface ComponentData {
   id: string;
   name: string;
   description: string;
   image: string;
}

export const components: ComponentData[] = [
   {
      id: "water-ripple",
      name: "Water Ripple",
      description: "An interactive, high-performance water ripple effect powered by Three.js and custom GLSL shaders. Move your cursor to create ripples.",
      image: "https://res.cloudinary.com/dbgee370f/image/upload/v1772525777/Screenshot_2026-03-03_124655_lgc6rs.png",
   },
];
