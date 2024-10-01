'use server'

import General from "@/models/general";
import MainCharacter from "@/models/mainCharacter";
import Page from "@/models/page";

export const createFirstCharacter = async () => {

  try {
    // HydratedDocument<IMainCharacter>
    const newMainCharacter  = new MainCharacter({
      name: 'fake',
    })

    await newMainCharacter.save()
    
    const newGeneral = new General({
      url_logo: 'https://freesvg.org/img/Fake-Real-Black.png',
      primary_color: '#B17457',
      secondary_color: '#4A4947',
      background_color: '#FAF7F0',
      foreground_color: '#D8D2C2',
      text_color: '#000',
      main_character_name: newMainCharacter.name,
    })

    await newGeneral.save()

    const newPage = new Page({
      name: 'landing_page',
      title: 'Fake Enterprise',
      path: '/',
      sub_title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illo, odio neque inventore reiciendis velit delectus ullam quia dignissimos',
      main_image_url: 'https://medrectech.com/image/enterprise.png',
      main_character_name: newMainCharacter.name,
    })

    await newPage.save()

    return true
  } catch (error: any) {
    console.log(error)
    return false
  }

}