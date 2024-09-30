'use server'

import  General, { IGeneral } from "@/models/general";
import MainCharacter from "@/models/mainCharacter";
import Page from "@/models/page";
import { HydratedDocument } from "mongoose";

export const createFirstCharacter =  async  () =>  {

    try {
      const newGeneral: HydratedDocument<IGeneral> = new General({
        url_logo: 'https://freesvg.org/img/Fake-Real-Black.png',
        primary_color: '#B17457',
        secondary_color: '#4A4947',
        background_color: '#FAF7F0',
        foreground_color: '#D8D2C2',
        text_color: '#000',

      })
      console.log(newGeneral.save)
      await newGeneral.save()

      const newPage = new Page({
        name: 'landing_page',
        title: 'Fake Enterprise',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illo, odio neque inventore reiciendis velit delectus ullam quia dignissimos',
        main_image_url: 'https://medrectech.com/image/enterprise.png'
      })

      await newPage.save()

      const newChar = new MainCharacter({
        name: 'fake',
        general: newGeneral,
        page: [
          newPage
        ]
      })

      await newChar.save()
      console.log('criação feita com sucesso.')
      return true
    } catch (error: any) {
      console.log(error)
      return false
    }

  }