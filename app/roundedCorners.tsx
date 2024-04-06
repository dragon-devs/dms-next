import React from 'react';

interface RoundedCornersProps {
    children: React.ReactNode;
}
const RoundedCorners: React.FC<RoundedCornersProps> = ({children}) => {
    return (
        <div className="bg-slate-950 relative -z-50 rounded-xl p">
            {children}
        </div>
    );
};

export default RoundedCorners;