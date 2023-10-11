import React from 'react'
// import '../Settings/style.css'
// import '../Settings/bootstrap.min.css'
import '../Settings/admin-css.css'

const Invoice = () => {
    return (
        <div><div className="before-table-2">
            <div className="invoice-cats">
                <a href="#">
                    <div>
                        Preview
                    </div>
                </a>
            </div>
            {/* <div class="alert-div">
                <span class="sp1"> Hello </span> <span class="sp2"> &times; </span>
            </div> */}
            <a href="#new-invoice">
                <div className="new-invoice-2">
                    Download
                </div>
            </a>
        </div>

            <form action="/create-invoice" method="post" enctype="multipart/form-data">
                <div className="invoice-div">

                    <div className="part-1">
                        <div className="inv-num"> <h1>INV1234</h1> </div>
                        <div className="logo-box">

                            <input type="file" accept="image/*" name="fileud" id="fileud" style={{ display: "none" }} />

                            <label htmlFor="fileud" style={{ cursor: "pointer" }}>
                                + Logo
                            </label>

                            <img id="output" width="25%" />
                        </div>
                    </div>
                    {/* {{ #if mySettings }} */}
                    <div className="part-2">

                        <div className="from-side">
                            <h2> From </h2>
                            <div>
                                <label htmlFor=""> Name </label>
                                <input type="text" name="fromname" value="{{mySettings.companyName}}" />
                            </div>
                            <div>
                                <label htmlFor=""> Email </label>
                                <input type="text" name="fromemail" value="{{mySettings.companyEmail}}" />
                            </div>
                            <div>
                                <label htmlFor=""> Address </label>
                                <input type="text" name="fromaddress" value="{{mySettings.companyAddress}}" />
                            </div>
                            <div>
                                <label htmlFor=""> Phone Number </label>
                                <input type="text" name="fromphonenumber" value="{{mySettings.companyPhoneNumber}}" />
                            </div>

                            <div>
                                <label htmlFor=""> Business Number </label>
                                <input type="text" name="frombusinessnumber" value="{{mySettings.companyBusinessNumber}}" />
                            </div>

                            <div>
                                <label htmlFor=""> Date </label>
                                <input type="text" name="fromdate" />
                            </div>

                        </div>

                        <div className="to-side">
                            <h2> To </h2>
                            <div>
                                <label htmlFor=""> Name </label>
                                <input type="text" name="toname" />
                            </div>
                            <div>
                                <label htmlFor=""> Email </label>
                                <input type="text" name="toemail" />
                            </div>
                            <div>
                                <label htmlFor=""> Address </label>
                                <input type="text" name="toaddress" />
                            </div>
                            <div>
                                <label htmlFor=""> Phone Number </label>
                                <input type="text" name="tophonenumber" />
                            </div>




                        </div>

                    </div>
                    {/* {{ else}} */}
                    <div className="part-2">

                        <div className="from-side">
                            <h2> From </h2>
                            <div>
                                <label htmlFor=""> Name </label>
                                <input type="text" name="fromname" />
                            </div>
                            <div>
                                <label htmlFor=""> Email </label>
                                <input type="text" name="fromemail" />
                            </div>
                            <div>
                                <label htmlFor=""> Address </label>
                                <input type="text" name="fromaddress" />
                            </div>
                            <div>
                                <label htmlFor=""> Phone Number </label>
                                <input type="text" name="fromphonenumber" />
                            </div>

                            <div>
                                <label htmlFor=""> Business Number </label>
                                <input type="text" name="frombusinessnumber" />
                            </div>

                            <div>
                                <label htmlFor=""> Date </label>
                                <input type="text" name="fromdate" />
                            </div>

                        </div>

                        <div className="to-side">
                            <h2> To </h2>
                            <div>
                                <label htmlFor=""> Name </label>
                                <input type="text" name="toname" />
                            </div>
                            <div>
                                <label htmlFor=""> Email </label>
                                <input type="text" name="toemail" />
                            </div>
                            <div>
                                <label htmlFor=""> Address </label>
                                <input type="text" name="toaddress" />
                            </div>
                            <div>
                                <label htmlFor=""> Phone Number </label>
                                <input type="text" name="tophonenumber" />
                            </div>




                        </div>

                    </div>

                    {/* {{/if}} */}

                    <hr />

                    <div className="part-3">
                        <div className="table-div">
                            <table >
                                <thead>
                                    <tr>
                                        <th>
                                            Description
                                        </th>
                                        <th>
                                            Rate
                                        </th>
                                        <th>
                                            QTY
                                        </th>
                                        <th>
                                            Amount
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>
                                            <button> &times;</button>
                                            <input type="text" name="description" />

                                        </td>
                                        <td>
                                            <input type="text" name="rate" />
                                        </td>
                                        <td>
                                            <input type="text" name="qty" />
                                        </td>
                                        <td>
                                            N 455,000
                                        </td>
                                    </tr>





                                    <tr>

                                        <td colspan="4" id="tb-td-2">
                                            <button>
                                                &plus;
                                            </button>
                                        </td>
                                    </tr>

                                    <tr id="tbtd-p">

                                        <td colspan="4" id="tb-td">
                                            <p> SubTotal : N10,000</p>
                                            <p> Balance Due : N10,000 </p>
                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>

                    </div>



                    <div className="part-4">
                        <p> Notes </p>

                        <textarea name="notes" id="" cols="90" rows="7" >

                        </textarea>

                    </div>
                </div>

                <div className="before-table-2">
                    <div className="invoice-cats">
                        <a href="#">
                            <div>
                                Preview
                            </div>
                        </a>
                    </div>

                    <a href="#new-invoice">
                        <div className="new-invoice">
                            <button className="divbutton" type="submit"> Create Invoice </button>
                        </div>
                    </a>
                </div>

            </form></div>
    )
}

export default Invoice