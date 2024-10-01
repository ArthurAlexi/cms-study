import { createFirstCharacter } from "@/_utils/createFirstCharacter"

export default async function Admin(){
    // await createFirstCharacter()
    return (
        <button  className="m-5 px-6 py-2 bg-fuchsia-900 text-white rounded-md hover:bg-fuchsia-800">
            Create a default Main Character
        </button>
    )
}