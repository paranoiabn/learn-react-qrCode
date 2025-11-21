import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from '../constants';

export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
    
    console.log(data);

    return (
        <div>
            изменения
            {data.map((text) => {
                <div>
                    <p key={text}>{text}</p>
                    <QRCodeSVG value={text} size={100} />
                </div>
            })}
        </div>
    );
}