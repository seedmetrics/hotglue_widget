import dynamic from 'next/dynamic'
const HotglueConfig = dynamic(() => import('@hotglue/widget'), { ssr: false })
import { Connections } from '@hotglue/widget'
export default function Home() {
    
    return (
        <div>
            <HotglueConfig
                config={{
                    apiKey: 'ADCgzXQpsj2aaPwzaDX0p3a33M0pUS88kmlnVvwe',
                    envId: 'dev.yjzx.hotglue.gmail.com',
                }}
                >
                <Connections tenant='test-user' />
            </HotglueConfig>
        </div>
    )
}