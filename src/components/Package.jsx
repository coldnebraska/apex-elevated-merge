import Tint from './UI/Tint'
import Ppf from './UI/Ppf'
import Coating from './UI/Coating'
import Detailing from './UI/Detailing'

export default function Package({ packageName }) {
    switch (packageName) {
        case 'tint':
            return <Tint />
        case 'ppf':
            return <Ppf />
        case 'coating':
            return <Coating />
        case 'detailing':
            return <Detailing />
    }
}
