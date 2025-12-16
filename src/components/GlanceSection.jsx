import React from 'react';
import Briddle from '../assets/bridle.png';
import okii from  '../assets/new.jpg';
import B from '../assets/b.png';
import C from '../assets/C.png';
import d from '../assets/d.png';

const GlanceSection = () => {
    return (
        <section className="glance-section">
            <div className="container">
                <div className="section-header">
                    <span className="blue-line"></span>
                    <div>
                        <h4 className="sub-title-small">MEHRA GROUP</h4>
                        <h2 className="section-title">MEHRA INTERNATIONAL<br />AT A GLANCE</h2>
                    </div>
                </div>

                <div className="glance-grid">
                    {/* Row 1 */}
                    <div className="glance-item">
                        <img src={Briddle} alt="Fabric Sewing Machinery" />
                        <p>Fabric Sewing Machinery</p>
                    </div>
                    <div className="glance-item">
                        <img src={okii} alt="CAD Machine" />
                        <p>CAD Machine for Pattern Making</p>
                    </div>
                    <div className="glance-item">
                        <img src={d} alt="Finishing Department" />
                        <p>Finishing Department</p>
                    </div>

                    {/* Row 2 */}
                    <div className="glance-item">
                        <img src={C} alt="Lasting Line" />
                        <p>Lasting Line</p>
                    </div>
                    <div className="glance-item">
                        <img src={B} alt="Leather Cutting Machine" />
                        <p>Leather Cutting Machine</p>
                    </div>
                    <div className="glance-item">
                        <img src={Briddle} alt="Leather Stitching Machinery" />
                        <p>Leather Stitching Machinery</p>
                    </div>

                    {/* Row 3 */}
                    <div className="glance-item">
                        <img src={B} alt="Nailing Machine" />
                        <p>Nailing Machine</p>
                    </div>
                    <div className="glance-item">
                        <img src={C} alt="Garment Pressing" />
                        <p>Garment Pressing</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlanceSection;
