interface returnI<T> {
  res: T;
  error: string | null;
}

export const getService  = async  <T> (param : string) : Promise<returnI<T>> => {
    const url= "https://itunes.apple.com/"+param;
    console.log('url', url)
    try {
      const response = await fetch(url , {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      })
    
      if (response.ok) {
        const result = await response.json();
        return {
          res: result,
          error: null,
        };
      }
      return {
        res: {} as T,
        error: null,
      };
    }catch(error){
      let msg= '';
      if (error instanceof Error){
        msg= error.message;
      }
      return {
        res: {} as T,
        error: msg,
      };

    }
   
}

