import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to Lady Land</title>
        <meta name="description" content="The world, but female" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.bg}></div>

      <main className={styles.main}>

        <div className={styles.contacts}>
          <div>
            <a href="mailto:welcometoladyland@gmail.com">Email us</a>&nbsp; - &nbsp;<a href="">Instagram</a>
          </div>
        </div>

        <div className={styles.description}>

          <div className={styles.logo}>
            <Image src="/logo.svg" alt="Lady Land Logo" width={125} height={125} />
          </div>

          <h1 className={styles.title}>
            "Welcome to Lady Land"
          </h1>

          <h2 className={styles.strap}>The world, but female</h2>

        </div>

        <div className={styles.grid}>
          <div className={`${styles.card} ${styles.cardPrimary}`}>
            <div className={styles.border}>
              <div className={styles.inner}>
                <h3>Picture this.</h3>
                <p>You're standing at the gates of a community, a town, a city - a society designed by women.</p>
                <p>You're marvelling at the sight of a utopia that you never thought was possible.</p>
                <p>Somewhere inclusive, yet female-led.</p>
                <p><strong></strong></p>
              </div>
            </div>
          </div>

          <div className={`${styles.card} ${styles.cardTertiary}`}>
            <form action="">

              <textarea name="" rows="8" placeholder="When looking at that place in your mind can you finish this sentence with a hope for your own society to mimic it? Imagine if..."></textarea>

              <div className={styles.formContacts}>
                <div>
                  <label for="name">Your name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" />
                </div>
                <div>
                  <label for="email">Your email</label>
                  <input type="email" id="email" name="email" placeholder="Your email" />
                </div>
              </div>

              <div>
                <button>Tell us</button> 
              </div>
            </form>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.card} ${styles.cardTertiary}`}>
            <div className={styles.border}>
              <div className={styles.inner}>
                <h3>“Welcome to Lady Land”</h3>
                <p>In the vein of DisneyLand, Dismaland, and Dreamland, Lady Land is a fictional world based on an ideal. Imagine a world designed for and by women, one where public space is reclaimed so she is not subjected to the male gaze, where we can build a feminist utopia that provides a critique of gender itself.</p>
                <p>What would a world look like if the average woman was the norm? If neutral dress meant skirts rather than trousers? If there were more and bigger toilet cubicles available in public places? If parks felt safe to walk in alone at night and beauty standards and sexual pleasure designed for the female gaze?</p>
                <p>Lady Land will go a step beyond the more popular commentary of feminism and delve deeper into the queer female experience, the mature female experience and the experience of women of colour. Who is the ‘average woman’ Lady Land is designed on? And how can it reflect upon critical global issues such as climate change and neo colonialism.</p>
                <p>The aim of Lady Land is not a one size fits all solution, as no woman is the same as another, nor the same as themselves depending on their cycle or from morning to night. However there are some fundamentals that can be easily adapted to suit all women better (seatbelts, shelf heights, public transport) and a lot of exciting conversations to be had by women around their needs, and what a place like Lady Land could be like to better serve these needs.</p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.border}>
              <div className={styles.inner}>
                <h3>What to expect?</h3>
                <p>Lady Land celebrates female designers, inventors, scientists, innovators, architects, researchers, writers, place-makers and artists by showcasing their ideas that advocate for womankind in all her forms. Our aim is to not only to do the thinking behind what Lady Land could look, feel and function like but also to one day realise that dream.</p>
                <p>Lady Land will not exclude men, rather it will focus on a space where women play the central role. Lady Land is not a straight reversal of society, but a vision of a society built for and by women. Lady Land will consider whether society needs to unlearn capitalism and neo colonialism, as you cannot begin to dream of a utopia based on ideologies designed by and for men.</p>
                <p>Lady Land will look to challenge the gender binary, dismantle toxic gender stereotypes and redefine and celebrate so-called "feminine" behaviours, such as empathy and emotion, as strengths. It will celebrate Matriarchy and the wild feminine - the mysterious, irrational, uncontrolled and unpredictable. </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.origin}>
          <h2>Lady Land origin story</h2>
          <h3>Four creatives in a pub on a cold January night...</h3>
          <p>Curator and Artistic Director, Charlie Levine, Contemporary Artist and Communications professional, Renée O’Drobinak, Artist, Tash Kahn, and Creative Learning & Participation professional, Victoria Patrick, stressed the importance of the need of female energy in their working day. Conversation moved to one of the women telling a tale of trying to reach some tomato juice from the top shelf in a supermarket. Unable to reach it the teller asked for help, a young man said ‘it’s there’ and pointed to the top shelf, before looking her up and down, noting her more petite frame and finally reaching up and getting her a bottle of tomato juice.</p>
          <p>What if, they thought, supermarkets were designed for women? What if the world was?</p>
        </div>

        <div className={styles.grid}>

          <div className={`${styles.card} ${styles.cardHasImg}`}>
            <div className={styles.border}>
              <img className={styles.headshot} src="/LL_Charlie.jpg" alt="Charlie Levine" width={200} height={200} />
              <div className={styles.inner}>
                <h3>Charlie Levine</h3>
                <p>Charlie Levine specialises in creating communities of artists and partners to co-create complex art programmes for realisation across multiple venues.  Specifically she leads on designing and the direction of programmes, curatorial themes, and enjoys working site / location responsively, bringing in the partners and developing (engagement) opportunities and legacy.</p>
                <p>Levine develops organisations to discover new creative networks and produce innovative creative projects with high profile and long term positive effects within their (and the creative) industry.</p>
                <p>Levine uses fiction as a starting point for exhibition making, alongside its context for viewing, and is inspired by collaboration. Her research lies in looking at the domestic space through a curatorial lens, and how curating and photography are linked via ‘the frame’. </p> 
                <p>Levine is a passionate advocate of the arts, especially in policy and place making, creating more accessible entry routes into the arts and promoting a more diverse and representative sector. </p>
                <p>An independent Curator and Artistic Director, Levine works between the West Midlands, London, and Mumbai. She obtained an MA in Critical and Contextual Art Practices from Birmingham City University (2006) and started my curatorial career as founder and curator of TROVE, an independent art gallery in Birmingham (2009 to 2013). </p>
                <p>Key current projects: Artistic Director of The Show Windows, a public realm project for Coventry City of Culture and Coventry BID; Co-Director and co-founder of SqW:Lab, an international fellowship for creatives in Mumbai; Curator of St. Pancras Wires, a new public art project in St. Pancras Station.</p>
              </div>
            </div>
          </div>

          <div className={`${styles.card} ${styles.cardHasImg}`}>
            <div className={styles.border}>
              <img className={styles.headshot} src="/LL_Renee.jpg" alt="Renée O'Drobinak" width={200} height={200} />
              <div className={styles.inner}>
                <h3>Renée O'Drobinak</h3>
                <p>Once described in PR Week as the 'Japanese Slovakian-American performance artist', Renee hails from a pretty unusual mix of cultures and professional experience - both as a contemporary artist and a built environment communications manager. </p>
                <p>A graduate of the Slade School of Fine Art and the London College of Communications, she has been a contemporary artist for over a decade as one half of the duo Ladies of the Press, specialising in live publishing and audience engagement. In the past she has led creative workshops for the likes of Tate, Southbank Centre and Wellcome Trust, and has jointly guest lectured on art and print at universities in London, Denver and Oslo.</p>
                <p>In the meantime, she cut her teeth in built environment communications at an AJ100-listed conservation architecture practice where she was responsible for the practice's communications strategy and graphic design output for five years. She currently leads the communications team at Hawkins\Brown, one of the top 10 UK architecture practices according to the Architects’ Journal.  </p> 
                <p>Renee is a keen advocate for inclusivity in the creative profession: she is an alumnus of the BME PR Pros mentorship programme, volunteers as a mentor for I LIKE NETWORKING and sits on the steering committee for the built environment networking group Build Up.</p>
              </div>
            </div>
          </div>

          <div className={`${styles.card} ${styles.cardHasImg}`}>
            <div className={styles.border}>
              <img className={styles.headshot} src="/LL_Tash.jpg" alt="Tash Kahn" width={200} height={200} />
              <div className={styles.inner}>
                <h3>Tash Kahn</h3>
                <p>Tash Kahn’s practice is multi-faceted. She works with a variety of different mediums that all bleed into each other through a process of recycling and remaking. Each piece spawns countless others, negating the art object as a whole. Using sculpture, Polaroids, installation, film and collage, she documents the history of everyday life by recording the debris of the present. She is interested in how people engage with art, the conversations it generates and how it makes them feel.</p>
                <p>Kahn has exhibited both nationally and internationally, with a recent project in Mumbai that saw her work with architects and writers to investigate the domestic space. In 2014, she co-founded the visual-arts project DOLPH, and has helped facilitate 22 exhibitions, making partnerships with two Lambeth primary schools, UAL Wimbledon, The Royal College of Art, as well as numerous artists in the UK, New York and Berlin. DOLPH provides an alternative way for the community to engage with contemporary art, as well as being an invaluable learning and networking resource for artists. She is also a freelance editor for Penguin and Sluice Magazine.</p>
              </div>
            </div>
          </div>

          <div className={`${styles.card} ${styles.cardHasImg}`}>
            <div className={styles.border}>
              <img className={styles.headshot} src="/LL_Victoria.jpg" alt="Victoria Patrick" width={200} height={200} />
              <div className={styles.inner}>
                <h3>Victoria Patrick</h3>
                <p>As Impact Manager for the Design Age Institute, Victoria works to develop, deliver and measure a range of engagement activities including: working closely with the Design Museum to deliver public participation and outreach opportunities; establishing an active community in design for healthy ageing, including academics, designers, researchers, and service providers; and supporting the dissemination of learning from the Institute’s research and innovation initiatives.</p>
                <p>Victoria moved to London in 2004 from her hometown of Vancouver, Canada to begin a Master’s degree in theatre practice at Central School of Speech and Drama. She graduated with a BA from McGill University in 2003.</p>
              </div>
            </div>
          </div>

        </div>        

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
