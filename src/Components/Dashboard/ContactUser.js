import React, { useEffect, useState } from 'react'
import DashboardHeader from '../Includes/DashboardHeader'
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Includes/Footer';
import GeneralService from '../../services/general.service';
import { useSelector } from 'react-redux';

export default function ContactUser() {

    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState([]);

    const state = useSelector((state) => state.stateVals);
    const { id, accessToken, uType } = state;
    const navigate = useNavigate();

    useEffect(() => {
        if (!accessToken || (accessToken && uType === 'user')) {
            navigate("/admin-login");
        }
    }, []);

    const getResultData = async () => {
        try {
            setLoading(true);

            const response = await GeneralService.listMessages();

            let resultData;
            setLoading(false);
            resultData = response.data.response;
            setResultData(resultData);
        } catch (err) {
            setResultData([]);
            setLoading(false);
        }
    };

    useEffect(() => {
        getResultData();
    }, []);

    return (
        <>
            <DashboardHeader />
            <div className="page-heading dashboard normal-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-text">
                                <h6>Mr FREELANCER</h6>
                                <h2>View Contacts Details</h2>
                                <span><a href="/dashboard">Dashboard ＞</a>Contact User</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="item-details-page">
                <div className="container">
                    <div className="row">
                        <div className="section-heading">
                            <div className="line-dec"></div>
                            <h2>Contacts <em>Users</em> Details</h2>
                            <div className="dashboard-bid">
                                <div class="recent-records">
                                    <h2>Recent Records <em>10</em></h2>
                                </div>
                                <div class="table-container">
                                    <table class="dark-table">
                                        <thead>
                                            <tr>
                                                <th><i class="fas fa-user"></i> Subject</th>
                                                <th><i class="fas fa-envelope"></i> Message</th>
                                                <th><i class="fas fa-calendar-alt"></i> Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {resultData.map((row, num) => {
                                                return (
                                                    <tr key={num}>
                                                        <td>{row.subject}</td>
                                                        <td>{row.message}</td>
                                                        <td>{row.date}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
