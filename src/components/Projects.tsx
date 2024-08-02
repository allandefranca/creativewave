import Image from "next/image";

export default function Projects() {
  const project = [
    { title: 'Masterclass', description: 'Teaches diplomacy', img: '/gallery/projects/project1.jpg' },
    { title: 'Take me back to Harlem', description: 'A True Story', img: '/gallery/projects/project2.png' },
    { title: 'Porsche', description: 'Slinky Story', img: '/gallery/projects/project3.png' },
    { title: 'Ernie Ball', description: 'Slinky Story', img: '/gallery/projects/project4.jpg' },
    { title: '1792', description: 'UnTypical', img: '/gallery/projects/project5.jpg' },
    { title: 'FootLocker', description: 'Heritage Month', img: '/gallery/projects/project6.jpg' },
    { title: 'Nike SB', description: 'Smile', img: '/gallery/projects/project7.jpg' },
    { title: 'OnePlus x Hasselblad', description: 'Statement', img: '/gallery/projects/project8.jpg' },
    { title: 'Ouch', description: 'A super short film', img: '/gallery/projects/project9.jpg' },
  ]
  return (
    <>
      <div className="flex">
        <div>
          <Image
            src={project[0].img}
            alt=""
            width={520}
            height={520}
          />
        </div>
        <div>
          <div>
            <Image
              src={project[1].img}
              alt=""
              width={260}
              height={260}
            />
          </div>
          <div>
            <Image
              src={project[2].img}
              alt=""
              width={260}
              height={260}
            />
          </div>
        </div>
        <div>
          <Image
            src={project[3].img}
            alt=""
            width={520}
            height={520}
          />
        </div>
      </div>
      <div className="flex">
        <div>
          <div>
            <Image
              src={project[4].img}
              alt=""
              width={325}
              height={325}
            />
          </div>

          <div>
            <Image
              src={project[5].img}
              alt=""
              width={325}
              height={325}
            />
          </div>
        </div>
        <div>
          <Image
            src={project[6].img}
            alt=""
            width={650}
            height={650}
          />
        </div>
        <div>
          <div>
            <Image
              src={project[7].img}
              alt=""
              width={325}
              height={325}
            />
          </div>

          <div>
            <Image
              src={project[8].img}
              alt=""
              width={325}
              height={325}
            />
          </div>
        </div>
      </div>
    </>
  );
}


