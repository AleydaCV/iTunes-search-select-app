interface returnI<T> {
  res: T;
  error: string | null;
}

export const getService  = async  <T> (param : string) : Promise<returnI<T>> => {
    const url= "https://itunes.apple.com/"+param;
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
      let msg= 'Ups, algo salio mal';
      if (error instanceof Error){
        msg= error.message;
        console.log('msg', msg)
      }
      return {
        res: {} as T,
        error: msg,
      };

    }
   
}

