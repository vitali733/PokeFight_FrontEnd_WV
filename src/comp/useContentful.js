import { createClient } from "contentful";

export default function useContentful(){

    const client = createClient({
        space: "vsb4zoc8757i",
        accessToken: "47JP6xLpQIGYEnQrd0sbnF1Q2rOR2zfoZD9ldJwDq5M",
        host: "preview.contentful.com"
      });
    
      const getRecipes = async () => {
        try {
          const entries = await client.getEntries({
            content_type: "recipeBook",
            select: "fields"
          });
    
          const sanitazideEntries = entries.items.map((item) => {
            return {
              ...item.fields
            };
          });
    
          // return entries;
          return sanitazideEntries;
        } catch (error) {
          console.log("There's been an error trying to get the recipes " + error);
        }
      };
    
      return { getRecipes };
    

};