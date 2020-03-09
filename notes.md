

My story starts back in 2017. I came across a Kickstarter for MAKERbuino, a DIY kit where you build your own hand-held game system. This in turn is based on the original Gamebuino. It has a black and white Nokia screen, an 8-bit microcontroller running at 16Mhz, and is programmed using the Arduino IDE. It was fun writing simple games within the hardware constraints. A few people had written emulators for this original Gamebuino, a couple of them even running in a web browser. Later that year, a new version of the Gamebuino was announced, the Gamebuino META. I'd never written an emulator before, but it sounded like an interesting challenge. 

As a side note, the main appeal of this device for me is creating my own games on the limited hardware. It is very accessible even for people with no programming experience. If this interests you, just be aware that there are also other options like the Pokitto and Arduboy. 

---

To give this talk context, we need to discuss the hardware of the Gamebuino META. I am going to go pretty fast because you don't need to understand everything for the rest of the talk...

Perhaps the most important part to creating the emulator, it is running a 32-bit ARM-based processor at 48MHz. Many instructions can be executed in a single clock cycle, so we are talking about theoretically simulating 48 million instructions per second. Keep in mind that each of these simulated instructions involves several steps, such as: parsing the instruction, reading and writing values to memory, updating condition flags, and incrementing the program counter. At the end of the day, this is where the vast amount of processor time will be spent.

256KB of Flash memory. This is where the game is stored when running. Additional games can be loaded from an SD card. Although assets could be loaded from the SD card on demand, most games include _everything_ within those 256KB. Compared to programs sizes on modern PCs or JavaScript files for a simple website, this is miniscule!

32KB SRAM. This is where the running program stores any value that can change while the program is running, such as variables. 32KB isn't even enough to have a buffer representing every pixel on the screen!

There is built-in support for some serial communication modules. I bring it up because we will need to emulate this behavior for talking to the screen and buttons.

The processor can also be interrupted for certain events. One example is an interrupt for a certain amount of time passing, which is used by the game loop for displaying content at a fixed number of frames per second.

And finally, I'll mention the direct memory access controller. It allows the microcontroller to copy blocks of memory from one location to another without blocking the CPU from doing other work. We need this working as well as the game library depends on it to send screen data.

---

The screen is color, 160 by 128 pixel. Interestingly, it doesn't use 8 bits for red, green, and blue that you may be familiar with. Instead it is 16 bits per pixel, with red and blue using 5 bits and green using 6 bits. As mentioned on the previous slide, communication uses SERCOM. 

---

There are 8 buttons. The button state is sent to the processor as a single byte, with each button using a different bit. This makes it super easy to emulate.

---

And there are many aspects of the hardware that this emulator just ignores. Perhaps they will be added one day.

---

With that background, we can take a stab at some pseudo code for the emulator.