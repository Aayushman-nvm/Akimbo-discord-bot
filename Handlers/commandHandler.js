//handles commands and finds where the application is
import { askGemini } from "../Commands/geminiCommands.js"
export async function commandHandler(command, interaction){
    if(command==='gemini'){
        await askGemini(interaction);
    }
}