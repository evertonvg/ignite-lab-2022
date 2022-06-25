import {CheckCircle,Lock} from 'phosphor-react'
import { format, isPast} from 'date-fns'
import {Link} from 'react-router-dom'
import ptBR from 'date-fns/locale/pt-BR'
import { useParams } from 'react-router-dom';

interface LessonProps{
  title:string;
  slug:String;
  availaAt:Date;
  type: 'live' | 'class';
}
export function Lesson(props: LessonProps){
  const {slug} = useParams<{slug: string}>()
	const isLessonAvalilable = isPast(props.availaAt);
	const availableDateFormat = format(props.availaAt,  " EEEE' - 'd' de 'MMMM' - 'k'h'mm",{
		locale: ptBR
	})

  const isActiveLesson = slug==props.slug
  return(
    <Link to={`/event/lesson/${props.slug}`} className='group'>
      <span className="text-gray-300">
        {availableDateFormat}
      </span>
      <div className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors  ${isActiveLesson ? 'bg-green-500' : ''}`}>
        <header className="flex items-center justify-between">
         {isLessonAvalilable ? (
			 <span className={`text-sm  font-medium flex items-center gap-2 ${isActiveLesson ? 'text-white':'text-blue-500'}`}>
			 <CheckCircle size={20}/>
			   Conteudo Liberado
		   </span>
		  ) : (
			<span className={`text-sm text-orange-500 font-medium flex items-center gap-2 `}>
            <Lock size={20}/>
              Em Breve
          </span>
		  )}
          <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold">
              {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
            </span>
        </header>
        <strong className={` mt-5 block ${isActiveLesson ? 'text-white':'text-gray-200'}`}>
         {props.title}
        </strong>
      </div>
    </Link>
  )
}