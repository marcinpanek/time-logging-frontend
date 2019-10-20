import React from 'react';
import LoggingDataWrapper from '../components/LoggingDataWrapper';

export const TimeLoggingPage: React.FC = () => {
    return (
        <>
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Project Time Logging</h1>
                <p className="lead">Quickly view the overall time spect by a specific user on different applications.</p>
            </div>

            <div className="container">
                <LoggingDataWrapper />
            </div>
        </>
    )
}

export default TimeLoggingPage;