import "./PokeFight.css";

export default function PokeFight({  }){
      
    return(
        <>
        <h1>Pokefight!</h1>

        <div className = "head">
            <div className = "head-element">
                <h3>1st phase &#62; </h3>
                    <ol>
                        <li>get your first pokemon</li>
                        <li>Keep or switch pokemon</li>
                        <li>fight!</li>
                    </ol>
            </div>
            <div className = "head-element">
                <h3>2nd phase &#62; </h3>
                    <ol>
                        <li>Keep or switch pokemon</li>
                        <li>fight!</li>
                    </ol>
            </div>
            <div className = "head-element">
                <h3>3rd phase &#62; </h3>
                    <ol>
                        <li>Keep or switch pokemon</li>
                        <li>fight!</li>
                    </ol>
            </div>
            <div className = "head-element">
                <h2>4th phase </h2>
                    <ol>
                        <li>Summing up wins</li>
                        <li>crown the winner</li>
                    </ol>
            </div>
        </div>



        </>
    );
};


